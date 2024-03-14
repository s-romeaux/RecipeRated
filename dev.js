{
    "scripts"; {
        "start"; "node server/server.js",
            "client"; "cd client && npm start",
                "dev"; "concurrently \"npm run start\" \"npm run client\""
    }
}
