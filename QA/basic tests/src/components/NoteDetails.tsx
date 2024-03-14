import { note } from "../types/noteTypes";

export default function NoteDetails({ text }: note) {
    return (
        <>
            <div>
                <p>{text}</p>
            </div>
        </>
    )
}
