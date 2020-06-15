import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { connect, useSelector } from "react-redux"
import GroupForm from "./GroupForm"
import MenuForm from "./MenuForm"

import { LOAD_GROUP_LIST, LOAD_PRODUCT_LIST_ALL } from "../../actions/constants"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "green",
  },
}))

const getSteps = () => {
  return ["Group Master", "Add Menu List"]
}

const MenuManagement = props => {
  const { loadExistGroupList, loadExistProductList } = props
  const groupList = useSelector((state) => state.product.groupList)
  const productList = useSelector((state) => state.product.productList)

  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <GroupForm data={groupList} />
      case 1:
        return <MenuForm data={productList} group={groupList} />
      default:
        return "Unknown step"
    }
  }

  useEffect(() => {
    loadExistGroupList()
    loadExistProductList()

    return () => {}
  }, [loadExistGroupList, loadExistProductList])

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div style={{ background: "white" }}>
            <Typography className={classes.instructions}>
              บันทึกข้อมูลเมนูอาหารเรียบร้อยแล้ว
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadExistGroupList: (type) =>
      dispatch({
        type: LOAD_GROUP_LIST,
        payload: {
          type,
        },
      }),
    loadExistProductList: (type) =>
      dispatch({
        type: LOAD_PRODUCT_LIST_ALL,
        payload: {
          type,
        },
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuManagement)
