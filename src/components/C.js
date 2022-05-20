import { useSelector } from "react-redux"

export default function C() {
    const text = useSelector(state => state.input.text);

  return (
    <div>
        <h1>{text}</h1>
    </div>
  )
}
