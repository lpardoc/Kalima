let mysql = require('mysql');
const connection = require("../config/db.js")
const controller = {};

controller.main = (req, res) => {
    res.render('index.ejs')
}

controller.proyectos = (req, res) => {
    res.render('proyectos.ejs')
}
controller.servicios = (req, res) => {
    res.render('servicios.ejs')
}

controller.estudio = (req, res) => {
    res.render('estudio.ejs')
}
controller.contacto = (req, res) => {
    res.render('contacto.ejs')
}


controller.list = (req, res) => {
    let sql = "SELECT * FROM projects"
    connection.query(sql, function (err, results) {
        res.render('projects.ejs', {
            results: results
        });

    })
}

controller.create = (req, res) => {
    res.render('create.ejs')
}

controller.save = function (req, res) {
    let name = req.body.name;
    let description = req.body.description;
    let date_start = req.body.date_start;
    let date_end = req.body.date_end || null;
    let projected_end_date = req.body.projected_end_date;
    let budget = req.body.budget;

    let sql = "INSERT INTO projects SET?";
    connection.query(sql, {
        name,
        description,
        date_start,
        date_end,
        projected_end_date,
        budget

    }, function (err, results) {
        res.redirect('/projects')
    })
}

controller.delete = (req, res) => {
    var id = req.params.id;
    console.log(id)
    connection.query('DELETE FROM task WHERE id_project = ' + id, function (err, result) {
        connection.query('DELETE FROM projects WHERE id_project = ' + id, function (err, results2) {
            if (err) {
                throw err;
            }
            else {
                res.redirect('/projects')
            }
        })
    })
}

controller.edit = (req, res) => {
    const { id } = req.params;
    connection.query("SELECT * FROM projects WHERE id_project = ?", [id], (err, results) => {
        console.log(results)
        if (err) {
            throw err;
        } else {
            res.render('edit.ejs', {
                results: results[0],
            })
        }
    });
}

controller.update = (req, res) => {
    const { id } = req.params;
    let name = req.body.name;
    let description = req.body.description;
    let date_start = req.body.date_start || null;
    let date_end = req.body.date_end || null;
    let projected_end_date = req.body.projected_end_date || null;
    let budget = req.body.budget;
    connection.query('UPDATE projects set? WHERE id_project = ' + id, { name, description, date_start, date_end, projected_end_date, budget }, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/projects');
        }
    });
};

controller.createTask = (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM projects WHERE id_project = ?", [id], (err, results) => {
        if (err) {
            throw err
        } else {
            res.render('createtask.ejs', { results: results[0] })
        }
    })
}

controller.saveTask = (req, res) => {
    id_project = req.params.id,
        name = req.body.name,
        description = req.body.description,
        deadline = req.body.deadline
    connection.query("INSERT INTO task SET?", {
        name,
        description,
        deadline,
        id_project
    }, function (err, results) {
        res.redirect('/projects/task/' + id_project)
    })

}

controller.showtask = (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM task WHERE id_project = ? ORDER BY task.deadline ASC", [id], (err, results) => {
        if (err) {
            throw err
        }
        else {
            connection.query("SELECT * FROM projects WHERE id_project = ?", [id], (err, results2) => {
                res.render('task.ejs',
                    {
                        results: results,
                        results2: results2[0]
                    })
            })
        }
    })
}

controller.editTask = (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM task WHERE id_task = ?", [id], (err, results) => {
        res.render('edittask.ejs', { results: results[0] })
    })
}

controller.updateTask = (req, res) => {
    const { id_project } = req.params
    const id = req.params.id
    name = req.body.name
    description = req.body.description
    deadline = req.body.deadline
    connection.query("SELECT * FROM task WHERE id_task = " + id, (err, results) => {
        let id_project = results[0].id_project
        connection.query("UPDATE task SET? WHERE id_task = " + id, { name, description, deadline }, (err, results2) => {
            if (err) {
                throw err
            }
            else {
                res.redirect('/projects/task/' + id_project)
            }
        })
    })

}

controller.deleteTask = (req, res) => {
    const id = req.params.id
    connection.query("SELECT * FROM task WHERE id_task = " + id, (req, results) => {
        let id_project = results[0].id_project
        console.log(id_project)
        connection.query("DELETE FROM task WHERE id_task = " + id, (err, results2) => {
            if (err) {
                throw err
            }
            else {
                res.redirect('/projects/task/' + id_project)
            }

        })

    })

}

module.exports = controller;