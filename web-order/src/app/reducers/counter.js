import produce from "immer"

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "INCREMENT":
        draft.count += 1
        break
      case "DECREMENT":
        draft.count -= 1
        break
      case "RESET":
        draft.count = 0
        break
      default:
        break
    }
  })

export default counterReducer
