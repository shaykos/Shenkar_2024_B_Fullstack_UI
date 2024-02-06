import { NoteProps } from "../types/propsTypes";

export default function Note({ title, text, date }: NoteProps) {
    return (
        <div className="note">
            <h2>{title}</h2>
            <p>{text}</p>
            <span>{date.toLocaleDateString()}</span>
        </div>
    )
}