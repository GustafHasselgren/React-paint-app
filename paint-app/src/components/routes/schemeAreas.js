import { useLocation } from "react-router-dom"

export default function SchemeAreas() {
const location = useLocation();
const {id} = location.state;

    return (
        <div>Testing {id}</div>
    )
}