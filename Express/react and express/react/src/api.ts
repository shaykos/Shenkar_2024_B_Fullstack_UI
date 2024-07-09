//const BASE_URL = "https://shenkar-2024-b-fullstack-ui.onrender.com/api";
const BASE_URL = "http://localhost:7777/api";

export async function POST(url: string, obj: Object) {
    try {
        let res = await fetch(`${BASE_URL}/${url}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        //הסטטוס הוא לא מקבוצת 200
        if (!res.ok) {
            console.log({ res });
            return;
        }

        let data = await res.json();
        return data;

    } catch (error) {
        console.error({ error });
    }
}

export async function GET(url: string) {
    try {
        let res = await fetch(`${BASE_URL}/${url}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        //הסטטוס הוא לא מקבוצת 200
        if (!res.ok) {
            console.log({ res });
            return;
        }

        let data = await res.json();
        return data;

    } catch (error) {
        console.error({ error });
    }

}

export async function PUT(url: string, obj: Object) {
    try {
        let res = await fetch(`${BASE_URL}/${url}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        //הסטטוס הוא לא מקבוצת 200
        if (!res.ok) {
            console.log({ res });
            return;
        }

        let data = await res.json();
        return data;

    } catch (error) {
        console.error({ error });
    }
}

export async function DELETE(url: string) {
    try {
        let res = await fetch(`${BASE_URL}/${url}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });

        //הסטטוס הוא לא מקבוצת 200
        if (!res.ok) {
            console.log({ res });
            return;
        }

        let data = await res.json();
        return data;

    } catch (error) {
        console.error({ error });
    }
}
