export const getBooks =(req,res)=>{
        res.json({mensaje: "Obteniendo todos los libros"})
    };


export const getBookById = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id < 0) {
    return res.status(400).json({ error: "El ID debe ser un número válido" });
  }

  res.json({ mensaje: `Buscando el libro con ID: ${id}` });
};


export const createBook = (req, res) => {
  const body = req.body;
  const name = body.name || body.title;
  const author = body.author;
  const year = parseInt(body.year);
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "El titulo es obligatorio y debe ser texto" });
  }

  if (!author || typeof author !== "string" || author.trim() === "") {
    return res.status(400).json({ error: "El autor es obligatorio y tiene que ser texto" });
  }

  if (!year || isNaN(year) || year < 0) {
    return res.status(400).json({ error: "El año es obligatorio y debe ser número válido" });
  }

  res.status(201).json({
    mensaje: "Libro validado con éxito",
    libro: { name: name.trim(), author: author.trim(), year: year },
  });
};

export const updateBook = (req,res) =>{
    const id = parseInt(req.params.id);

    if(isNaN(id) || id<0){
        return res.status(400).json({error:"El ID deve ser un número vílido"});
    }
    res.json({mensaje: `Actualizando libro con ID: ${id}`});
};


export const deleteBook = (req,res) => {
    const id = parseInt (req.params.id);

    if(isNaN(id) || id<0){
        return res.status(400).json({error:"El ID debe ser un número válido"});
    }
    res.json({mensaje: `Borrando libro con ID: ${id}`});
}