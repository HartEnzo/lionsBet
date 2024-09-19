import "dotenv/config";
import e from "express";
import user_router from "./http/routes/user-roupe.js";
import roullete_bet_router from "./http/routes/roullete_bet_router.js";
import jackpot_bet_router from "./http/routes/jackpot_bet_router.js";
const app = e();

app.use(e.json());
app.use("user", user_router.js);
app.use("/roullete-bet", roullete_bet_router);
app.use("/jackpot-bet", jackpot_bet_router);

app.listen(process.env.API_PORT, () => {
    console.log("Aplicação rodando");
});
