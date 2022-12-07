CREATE TABLE "Users"(
    "id" INTEGER NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Users" ADD PRIMARY KEY("id");
CREATE TABLE "Lobbies"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "admin_id" INTEGER NOT NULL
);
ALTER TABLE
    "Lobbies" ADD PRIMARY KEY("id");
CREATE TABLE "Messages"(
    "id" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "create_at" DATE NOT NULL,
    "user_id" INTEGER NOT NULL,
    "lobby_id" INTEGER NOT NULL
);
ALTER TABLE
    "Messages" ADD PRIMARY KEY("id");
CREATE TABLE "Users_per_lobby"(
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "lobby_id" INTEGER NOT NULL
);
ALTER TABLE
    "Users_per_lobby" ADD PRIMARY KEY("id");
ALTER TABLE
    "Users_per_lobby" ADD CONSTRAINT "users_per_lobby_lobby_id_foreign" FOREIGN KEY("lobby_id") REFERENCES "Lobbies"("id");
ALTER TABLE
    "Messages" ADD CONSTRAINT "messages_lobby_id_foreign" FOREIGN KEY("lobby_id") REFERENCES "Lobbies"("id");
ALTER TABLE
    "Messages" ADD CONSTRAINT "messages_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "Users"("id");
ALTER TABLE
    "Users_per_lobby" ADD CONSTRAINT "users_per_lobby_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "Users"("id");
ALTER TABLE
    "Lobbies" ADD CONSTRAINT "lobbies_admin_id_foreign" FOREIGN KEY("admin_id") REFERENCES "Users"("id");