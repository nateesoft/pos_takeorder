import React, { Component } from "react"
import { Table, Button, Popconfirm, Row, Col, Icon, Upload } from "antd"
import { ExcelRenderer } from "react-excel-renderer"
import { EditableFormRow, EditableCell } from "./editable"
const HOST = process.env.HOST || window.location.hostname
const TAKEORDER_API = `http://${HOST}:4000`

export default class ExcelPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cols: [],
      rows: [],
      errorMessage: null,
      columns: [
        {
          title: "CODE",
          dataIndex: "code",
          editable: true,
        },
        {
          title: "NAME",
          dataIndex: "name",
          editable: true,
        },
        {
          title: "DESCRIPTION",
          dataIndex: "description",
          editable: true,
        },
        {
          title: "PRICE",
          dataIndex: "price",
          editable: true,
        },
        {
          title: "PRICE2",
          dataIndex: "price2",
          editable: true,
        },
        {
          title: "PRICE3",
          dataIndex: "price3",
          editable: true,
        },
        {
          title: "PRICE4",
          dataIndex: "price4",
          editable: true,
        },
        {
          title: "PRICE5",
          dataIndex: "price5",
          editable: true,
        },
        {
          title: "GROUP_CODE",
          dataIndex: "group_code",
          editable: true,
        },
        {
          title: "IMG_HOST",
          dataIndex: "img_host",
          editable: true,
        },
        {
          title: "IMG_URL",
          dataIndex: "img_url",
          editable: true,
        },
        {
          title: "IMG_URL_THUMBNAIL",
          dataIndex: "img_url_thumbnail",
          editable: true,
        },
        {
          title: "STATUS",
          dataIndex: "status",
          editable: true,
        },
        {
          title: "Action",
          dataIndex: "action",
          render: (text, record) =>
            this.state.rows.length >= 1 ? (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(record.key)}
              >
                <Icon
                  type="delete"
                  theme="filled"
                  style={{ color: "red", fontSize: "20px" }}
                />
              </Popconfirm>
            ) : null,
        },
      ],
    }
  }

  handleSave = (row) => {
    const newData = [...this.state.rows]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row,
    })
    this.setState({ rows: newData })
  }

  checkFile(file) {
    let errorMessage = ""
    if (!file || !file[0]) {
      return
    }
    const isExcel =
      file[0].type === "application/vnd.ms-excel" ||
      file[0].type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    if (!isExcel) {
      errorMessage = "You can only upload Excel file!"
    }
    console.log("file", file[0].type)
    const isLt2M = file[0].size / 1024 / 1024 < 2
    if (!isLt2M) {
      errorMessage = "File must be smaller than 2MB!"
    }
    console.log("errorMessage", errorMessage)
    return errorMessage
  }

  fileHandler = (fileList) => {
    console.log("fileList", fileList)
    let fileObj = fileList
    if (!fileObj) {
      this.setState({
        errorMessage: "No file uploaded!",
      })
      return false
    }
    console.log("fileObj.type:", fileObj.type)
    if (
      !(
        fileObj.type === "application/vnd.ms-excel" ||
        fileObj.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
    ) {
      this.setState({
        errorMessage: "Unknown file format. Only Excel files are uploaded!",
      })
      return false
    }
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err)
      } else {
        let newRows = []
        // eslint-disable-next-line array-callback-return
        resp.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined") {
            newRows.push({
              key: index,
              code: row[0],
              name: row[1],
              description: row[2],
              price: row[3],
              price2: row[4],
              price3: row[5],
              price4: row[6],
              price5: row[7],
              group_code: row[8],
              img_host: row[9],
              img_url: row[10],
              img_url_thumbnail: row[11],
              status: row[12],
            })
          }
        })
        if (newRows.length === 0) {
          this.setState({
            errorMessage: "No data found in file!",
          })
          return false
        } else {
          this.setState({
            cols: resp.cols,
            rows: newRows,
            errorMessage: null,
          })
        }
      }
    })
    return false
  }

  handleSubmit = async () => {
    // console.log("submitting: ", this.state.rows)
    const response = await fetch(`${TAKEORDER_API}/api/product`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productList: this.state.rows }),
    })
    const content = await response.json()
    console.log(content)
    alert("บันทึกข้อมูลเรียบร้อยแล้ว")
    this.setState({ rows: [] })
  }

  handleDelete = (key) => {
    const rows = [...this.state.rows]
    this.setState({ rows: rows.filter((item) => item.key !== key) })
  }
  handleAdd = () => {
    const { count, rows } = this.state
    const newData = {
      key: count,
      code: "xxx",
      name: "xxxxxx",
      description: "xxxxxxxxxxxxx",
      price: 0,
      price2: 0,
      price3: 0,
      price4: 0,
      price5: 0,
      group_code: "xxx",
      img_host: "",
      img_url: "",
      img_url_thumbnail: "",
      status: "Y",
    }
    this.setState({
      rows: [newData, ...rows],
      count: count + 1,
    })
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    }
    const columns = this.state.columns.map((col) => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      }
    })
    return (
      <div style={{background: "white"}}>
        <h1>Import ข้อมูลสินค้าจากไฟล์ Excel</h1>
        <Row gutter={16}>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", color: "black" }}>
              <div className="page-title">Upload Product</div>
            </div>
          </Col>
          <Col
            span={8}
            align="right"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {this.state.rows.length > 0 && (
              <div>
                <Button
                  onClick={this.handleAdd}
                  size="large"
                  type="info"
                  style={{ marginBottom: 16 }}
                >
                  <Icon type="plus" />
                  Add a row
                </Button>{" "}
                <Button
                  onClick={this.handleSubmit}
                  size="large"
                  type="primary"
                  style={{ marginBottom: 16, marginLeft: 10 }}
                >
                  Submit Data
                </Button>
              </div>
            )}
          </Col>
        </Row>
        <div>
          <Upload
            name="file"
            beforeUpload={this.fileHandler}
            onRemove={() => this.setState({ rows: [] })}
            multiple={false}
          >
            <Button>
              <Icon type="upload" /> Click to Upload Excel File
            </Button>
          </Upload>
        </div>
        <div style={{ marginTop: 20 }}>
          <Table
            components={components}
            rowClassName={() => "editable-row"}
            dataSource={this.state.rows}
            columns={columns}
          />
        </div>
      </div>
    )
  }
}
