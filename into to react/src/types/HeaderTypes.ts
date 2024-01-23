//מאפיין של קישור אחד
export type HeaderLinks = {
    url: string,
    text: string
}

//Header אוסף הפרמטרים שניתן לשלוח לפונקציה 
export type HeaderProps = {
    links: Array<HeaderLinks>
}