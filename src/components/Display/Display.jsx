import './Display.css'

export default function Display({ input }) {
    return (
        <div className="display">
            {input || "0"}
        </div>
    )
}