import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import Checkbox from "@material-ui/core/Checkbox"
import { useDispatch, connect, useSelector } from "react-redux"
import { addNewSubMenuCode, clearNewSubMenuCode } from "../../actions"
import MessageUtil from '../../utils/alertMsg'

const { LOAD_STEP_MENU_LIST } = require('../../actions/constants')

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}))

const MenuStepList = props => {
  const { code, type, loadStepMenuList } = props
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")
  const [subCode, setSubCode] = useState([])
  const dispatch = useDispatch()
  const productSubList = useSelector(state => state.product.productSubList)

  const handleAdd = item => {
    let hasExist = false
    for (let i = 0; i < subCode.length; i++) {
      const iSubCode = subCode[i]
      if (iSubCode === item.code) {
        hasExist = true
      }
      if (i === subCode.length - 1) {
        if (hasExist) {
          setSubCode(sCode => sCode.filter(sc => sc !== item.code))
          dispatch(clearNewSubMenuCode(item.code))
        } else {
          setSubCode(sCode => sCode.concat(item.code))
          dispatch(addNewSubMenuCode(item.code))
        }
      }
    }
    if (subCode.length === 0) {
      setSubCode(sCode => sCode.concat(item.code))
      dispatch(addNewSubMenuCode(item.code))
    }
  }

  const isSelect = code => {
    for (let i = 0; i < subCode.length; i++) {
      const iSubCode = subCode[i]
      if (iSubCode === code) {
        return true
      }
    }
    return false
  }

  useEffect(() => {
    loadStepMenuList(code, type)
    return () => {
      setMsgError('')
    }
  }, [code, type, loadStepMenuList])

  const HOST = process.env.HOST || window.location.hostname
  const rHost = url => {
    return url.replace('localhost', HOST)
  }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {productSubList && productSubList.map(item => (
          <GridListTile key={item.code}>
            <img
              src={`${rHost(item.img_host)}${item.img_url}`}
              alt={item.name}
              onClick={() => handleAdd(item)}
            />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <Checkbox
                  style={{ color: "white" }}
                  checked={isSelect(item.code)}
                />
              }
            />
          </GridListTile>
        ))}
      </GridList>
      {msgError && <MessageUtil message={msgError} />}
    </div>
  )
}

const mapStatetoProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    loadStepMenuList: (code, type) => dispatch({
      type: LOAD_STEP_MENU_LIST,
      payload: {
        code,
        type
      }
    })
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(MenuStepList)
