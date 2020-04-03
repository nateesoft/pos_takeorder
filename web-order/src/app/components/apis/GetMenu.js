import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import AddCircle from "@material-ui/icons/AddCircle"
import { Redirect } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { Config } from "../../config"
import addOrderItem from "./AddOrder"
import { increment } from "../../actions"
import { useSnackbar } from "notistack"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "green"
  }
}))

export default function GetMenu(props) {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [redirect, setRedirect] = useState(false)
  const [selItem, setSelItem] = useState({})
  const table_no = useSelector(state => state.table.tableNo)
  const order_no = useSelector(state => state.table.order.orderNo)
  const emp_code = useSelector(state => state.table.empCode)
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const handleOnClick = (code, group) => {
    setRedirect(true)
    setSelItem({
      code: code,
      group: group
    })
  }

  const onAddNewItem = (code, name, price) => {
    addOrderItem({ code, name, price, table_no, order_no, emp_code })
    dispatch(increment())
    const variant = "success"
    enqueueSnackbar("เพิ่มรายการอาหาร", { variant })
  }

  const initLoad = () => {
    console.log("initLoad")
    fetch(`${Config.API_HOST}/product/${props.id}`)
      .then(res => res.json())
      .then(
        response => {
          setData(response)
          setLoading(false)
        },
        error => {
          console.log("in error found => ", error)
          setLoading(false)
        }
      )
      .catch(error => {
        console.log("Error: (GetMenu: " + error + ")")
        setLoading(false)
      })
  }

  if (loading) {
    initLoad()
  }

  useEffect(() => {
    console.log("get menu page")
    return function() {
      setData([])
      console.log("get menu cleanup")
    }
  }, [])

  if (redirect) {
    return <Redirect push to={`/detail/${selItem.group}/${selItem.code}`} />
  }

  return (
    <div className={classes.root}>
      <GridList>
        {data.map(item => (
          <GridListTile key={item.code_key}>
            <img
              src={`${Config.API_HOST}/images${item.img_url}`}
              alt={item.description}
              onClick={() =>
                handleOnClick(`${item.code}`, `${item.group_code}`)
              }
            />
            <GridListTileBar
              title={item.name}
              subtitle={<span>Code: {item.code}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.description}`}
                  className={classes.icon}
                  onClick={() => onAddNewItem(item.code, item.name, item.price)}
                >
                  <AddCircle />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
