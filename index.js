'use strict';

// var emailer = require('emailjs');
 var handleBars = require('handlebars');
var Promise = require('bluebird');
// var //nodemailer = require('nodemailer'),
//     mime = require('mime-types'),
//     ses = require('nodemailer-ses-transport'),
//     logger = require('bunyan').createLogger({
//         name: 'dbconfigurer',
//         level: 'info'
//     }),
var _ = require('lodash'),
    fs = Promise.promisifyAll(require('fs'));
var pdf = require('html-pdf');
var html = fs.readFileSync('templates/emails/template.html', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' } 
});
// smtpTransport = require('nodemailer-smtp-transport');

var data = {
    title: 'practical node.js',
    author: '@azat_co',
    tags: ['express', 'node', 'javascript']
}
data.body = process.argv[2];


fs.readFileAsync("templates/emails/template.html", "utf8")
    .then(function(contents) {
        if (!contents) {
            throw err;
        }
        //return contents;

        handleBars.registerHelper('custom_title', function(title) {
            var words = title.split(' ');
            for (var i = 0; i < words.length; i++) {
                if (words[i].length > 4) {
                    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                }
            }
            title = words.join(' ');
            return title;
        })

        var template = handleBars.compile(contents);
        var html = template(data);
        console.log(html);
        var pdf = require('html-pdf');
        pdf.create(html).toFile('myfile.pdf', function(err, res) {
            console.log(res.filename);
        });
    });
// .then((fileContent) => {
//     handleBars.registerHelper('custom_title', function(title) {
//         var words = title.split(' ');
//         for (var i = 0; i < words.length; i++) {
//             if (words[i].length > 4) {
//                 words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//             }
//         }
//         title = words.join(' ');
//         return title;
//     });
//     var template = handleBars.compile(fileContent);
//     //console.log(template(data));

//     return template(data);
// })
// // .then((htmlContent) => {
// //     //Create File with pdf extension, first check file is present or not......
// //     fs.existsAsync('templates/emails/email' + '.pdf', function(exists) {
// //         if (exists) {
// //             // Do something
// //         } else {
// //             fs.writeFile('templates/emails/email.pdf', (err) => {
// //                 if (err) throw err;
// //                 return {fileContent:htmlContent,filePath:'templates/emails/email.pdf'};
// //                 console.log("The file was succesfully saved!");
// //             });
// //         }
// //     });

// // }).then()
// .catch(function(e) {
//     console.error(e.stack);
// });

// fs.readFile('/templates/emails/template.html', 'utf-8', function(error, source) {
//     handleBars.registerHelper('custom_title', function(title) {
//         var words = title.split(' ');
//         for (var i = 0; i < words.length; i++) {
//             if (words[i].length > 4) {
//                 words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//             }
//         }
//         title = words.join(' ');
//         return title;
//     })

//     var template = handleBars.compile(source);
//     var html = template(data);
//     console.log(html)
// });