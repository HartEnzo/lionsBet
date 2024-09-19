import betSchema from "../bet-schema.js";
import conn from "../conn.js"

const Schema = conn.Schema;

const jackpotBetSchema = new Schema({
    numbers: {
        type: [Schema.Types.Number],
        validate: (v) => v.length == 3,
        required: true 
        },
        bet: betSchema,
});

const jackpotBet = conn.model("jackpotBet", jackpotBetSchema);

export default jackpotBet;