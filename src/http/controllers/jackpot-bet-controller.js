import jackpotBet from "../database/models/jackpot-bet-model"

const store = async (req, res) => {
    try {
         const a = Math.floor(Math.random() * 10)
         const b = Math.floor(Math.random() * 10)
         const c = Math.floor(Math.random() * 10)

         if(a == b && b == c) {
            req.body.bet.status = "WON"
         } else {
            req.body.bet.status = "LOST"
         }
        /* a== b && b ==c 
        ? req.body.bet.status = "WON"
        :req.body.bet.status = "LOST" */
    
        req.body.numbers = [a, b, c];
         
        await jackpotBet.create(req.body);
        res.status(201).json(content)
    } catch (error) { 
        res.status(400).json(error);
    }
};

const index = async (req,res) => {
    try {
         const content = await jackpotBet.find(req.query).exec();
         res.json(content);
    }catch (error) {
       req.status(400).json(error);
    }
};

const show = async (req,res) => {
    try {
         const content = await jackpotBet.findById(req.query).exec();
         res.json(content);
    }catch (error) {
       req.status(400).json(error);
    }
};

const update= async (req,res) => {
    try {
         const content = await jackpotBet.findByIdAndUpdate(req.query).exec();
         res.json(content);
    }catch (error) {
       req.status(400).json(error);
    }
};

export default {
    store,
    show,
    index,
    update
}