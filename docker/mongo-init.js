db.createUser(
    {
        user: "weykon",
        pwd: "weykon",
        roles: [
            {
                role: "readWrite",
                db: "db"
            }
        ]
    }
);