
// message
// : 
// "登入成功"
// token
// : 
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBlOWUxZTEyZDBmYTQ2ZmUxYmY2NDQ4NWEwMDljYmE5ZDM2YmM4NjljMDhjYTBjNTkyNWFmMDg5YWEzNzU0YjI4MWQ4MmZkOTM5NjZjY2M3In0.eyJhdWQiOiIxIiwianRpIjoiMGU5ZTFlMTJkMGZhNDZmZTFiZjY0NDg1YTAwOWNiYTlkMzZiYzg2OWMwOGNhMGM1OTI1YWYwODlhYTM3NTRiMjgxZDgyZmQ5Mzk2NmNjYzciLCJpYXQiOjE2OTUxOTEwNTMsIm5iZiI6MTY5NTE5MTA1MywiZXhwIjoxNzI2ODEzNDUzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.pd-_tyQAbMf7vBmAu3_ye0OiOoi-MqbPfk0Rw6jem0XI4DFKpxzTXtu8c_Dl5LCyODmfEPpS8uyW9x5VGlmO74eXs1adU5t2u6gQTiLLw8nYEjznqlPrCIAqMSXtu_53m8mGLjQKqBDsmWjv2pWN_zPOnn-5j0dtTRC0svQ9LWyE2cAHxmtw49lz80EovZ8fISWQ7LQJ2cEETtRGb7NuZqcpj6ZXXLkzJcbKyuZvpO9Z3mpC7RFbzLyhWBPfrZl6QWsGMTdnrd-BOp068MGOASeH4XCXRTC4J-B1WM5zzkt3oag2nHag4KNb6mM4G82A2tMVcYDHHtN9S5Mdeohm9RmQZ22AIdtRRtYghLv_3J0Bjy9TQbEPYvQKvTltOmbHNAFZm06O5uYrp25UXD2YFutnMoLbRcSwsMFw1xU-GRUuI2EWK5CRkUlrJGOKb6fkC7UgiyMF-O-0_tizSxNKFWfmeMyLMFPm4ZlLYNfa39Vob--e574PQJge5GT-4et434rZmyLgZyCQ1Ye4U4yvM4d-dzhQfrxjjCxS2E4j7xrjKjqfQnJauEm8LmxUYT-zcnLDsaUkNxvrtkqrR89ZIx1xfmNKUxUvWPjtpzu1SpUNvFmjEwuSgOyvAb3rHJQkVOCuxCpNWs8TuVwPQHuftIrG4wOqUTmkbqHFhTzh3CU"
// token_type
// : 
// "Bearer"
// user
// : 
// {id: 2, name: "Bean", email: "Bean@gmail.com", role: 1, created_at: "2023-09-14 09:09:50",…}
//後端回傳的資料
export namespace IResponse {

    export interface Login {
        message: string;
        user: User;
    }

    export interface User {
        id: number;
        name: string;
        email: string;
        role: number;

        token: string;
        token_type: string;
        created_at?: string;
        updated_at?: string;
    }

    export interface Cart {

        cart_id: number;
        quantity: number;
        total: number;
        user_id: number;

        products: Product[];
    }

    export interface CartDetail {
        id: number;
        user_id: number;
        quantity: number;
        total: number;
    }
    export interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        image: string;

        stock: number;
        quantity: number;
        created_at?: string;
        updated_at?: string;
    }


}