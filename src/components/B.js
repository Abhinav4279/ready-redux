import { useSelector, useDispatch } from "react-redux"
import { updateText } from "../reducers/inputSlice";

export default function B() {
    const text = useSelector(state => state.input.text);
    const dispatch = useDispatch();

  return (
    <div>
        <input className="input" type='text' value={text} onChange={(e) => dispatch(updateText(e.target.value))} />
    </div>
  )
}
