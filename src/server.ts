import app from "./app";

const PORT = (process.env.PORT) ? process.env.PORT : 3000;

app.listen(PORT, () => {
    console.log(`Li-x billing Api listening on port ${PORT} `);
});
// export default server;