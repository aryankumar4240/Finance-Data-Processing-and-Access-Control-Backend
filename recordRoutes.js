// const express = require('express');
// const router = express.Router();
// const Record = require('../models/Record');

// // create
// router.post('/', async (req,res)=>{
//   const record = await Record.create(req.body);
//   res.json(record);
// });

// // get
// router.get('/', async (req,res)=>{
//   const records = await Record.find();
//   res.json(records);
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Record = require('../models/Record');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');


// 🔐 protected route
router.get('/', auth, async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

// create (admin only)
router.post('/', roleCheck(['admin']), async (req,res)=>{
    const record = await Record.create(req.body);
    res.json(record);
});

// get (admin + analyst)
router.get('/', roleCheck(['admin','analyst']), async (req,res)=>{
    const records = await Record.find();
    res.json(records);
});

// ✅ DELETE (admin only)
router.delete('/:id', roleCheck(['admin']), async (req,res)=>{
    await Record.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});

module.exports = router;