module.exports = template.html(title, list,
    `<h2>${title}</h2>${description}`,
    `<a href="/create">create</a> 
    <a href="/update?id=${title}">update</a>
   <form action = "delete_process" method="post">
      <input type = "hidden" name = "id" value= "${title}">
      <input type = "submit" value ="delete">
   </form>`
    );
