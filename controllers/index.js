let array = ["Chahrazad", "Hajar","Oussama", "Othman"]

//GET
exports.get_array = (req, res) => {
    res.send(array[req.query.id]);
    //console.log(array[req.query.id]);
  }

//POST
exports.add_to_array = (req, res) => {
    array.push(req.body.name)
    res.send(array);
  }  

//PUT
exports.edit_array =  (req, res) => {
    array[req.query.id] = req.body.name
    //console.log(array);
    res.send(array);
  }

//DELETE
exports.delete_an_array = (req, res) => {
    // array = array.filter(name => name !== req.query.name)
    array.splice(req.query.id, 1)
    //console.log(array);
    res.send(array);
  }  