import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";

export default function Gallery() {
    //states
    const [images, setImages] = useState<string[]>([]);
    const [imgSrc, setImgSrc] = useState<string>('');
    const [clicks, setClicks] = useState<number>(0);

    //effects
    useEffect(() => {
        setImages([
            'https://cdn.storyboardthat.com/storyboard-srcsets/he-examples/------------------------87.png',
            'https://www.bareket-astro.com/images/thumbnails/images/stories/Planets/solar_system_2-fit-449x271.jpg',
            'https://uploads.myubi.tv/wp-content/uploads/answers/622/92GE2QYPPSpic.jpg',
            'https://static.wixstatic.com/media/a4557f_3c692aecc365489292673f54034e27c3~mv2.png/v1/fill/w_980,h_551,al_c,usm_0.66_1.00_0.01/a4557f_3c692aecc365489292673f54034e27c3~mv2.png',
            'https://images1.calcalist.co.il/PicServer3/2017/02/22/706035/1NL.jpg',
            'https://i.ytimg.com/vi/QQt4YP_qvR4/maxresdefault.jpg'
        ]);
    }, []);

    useEffect(() => {
        if (clicks % 2 == 0) {
            //הגרלת מספר רנדומלי
            //Math.floor(Math.random() * (max - min) + min)
            let max = images.length - 1;
            let min = 0;
            let location = Math.floor(Math.random() * (max - min) + min);

            //שליפת תמונה במיקום רנדומלי
            setImgSrc(images[location]);
        }
    }, [clicks]);



    return (
        <>
            <h1>Gallery</h1>
            <div style={{ width: '100%', height: '300px', backgroundImage: `url(${imgSrc})` }}></div>
            <Button variant="outline-primary" onClick={() => setClicks(clicks + 1)}>Ouch</Button>
            {/* <button >Ouch :/ ({clicks})</button> */}
        </>
    )

}