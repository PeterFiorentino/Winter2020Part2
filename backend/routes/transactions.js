var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/helpers')
const transactionQueries = require('../queries/transactions')


router.get('/:user_id', authHelpers.loginRequired, async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const transactions = await transactionQueries.getTransactionsByUser(user_id)
    res.send({
      payload: transactions,
      msg: `Retrieved all transactions from this user ${user_id}`,
      err: false
    })
  } catch (err) {
    next(err)
  }
});


module.exports = router;