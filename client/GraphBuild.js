function SchemaGraph(data) {
  this.nodes = [];
  this.edges = [];
  this.addTypes(data);
}

SchemaGraph.prototype.addTypes = function(data) {
  data.forEach(type => {
    if (
      type.name[0] !== '_' &&
      type.name[1] !== '_' &&
      type.kind !== 'SCALAR'
    ) {
      let thisType = new Type(type)
      
      let fields = thisType.fields


      if (fields) {
        thisType.fields = fields.map(field => {
          const f = {
            name: field.name,
            description: field.description,
            defaultValue: field.defaultValue,
            args: field.args,
            isRequired: false,
            isList: false,
            type: {}
          };
    
          updateTypes(f, field);
    
          if ( f.type.kind !== 'SCALAR' && Object.keys(f.type).length) {
            this.edges.push(new Edge(thisType.name, f.type.name));
          }
          return f;
        });
      }

      this.nodes.push(thisType);
    }
  });
};

function Edge(source, target) {
  this.source = source;
  this.target = target;
}

function Type(type) {
  const { kind, name, description, fields } = type;
  this.kind = kind;
  this.name = name;
  this.description = description;
  this.fields = fields;
}

function updateTypes(objectToUpdate, data) {
  let { type } = data;

  while (type !== null) {
    switch (type.kind) {
      case 'NON_NULL':
        objectToUpdate.isRequired = true;
        break;

      case 'LIST':
        objectToUpdate.isList = true;
        break;

      case 'OBJECT':
        objectToUpdate.type.kind = 'OBJECT';
        objectToUpdate.type.name = type.name;
        break;

      case 'SCALAR':
        objectToUpdate.type.kind = 'SCALAR';
        objectToUpdate.type.name = type.name;
        break;

      case 'UNION':
        objectToUpdate.type.kind = 'UNION';
        objectToUpdate.type.name = type.name;
        break;

      case 'ENUM':
        objectToUpdate.type.kind = 'ENUM';
        objectToUpdate.type.name = type.name;
    }

    type = type.ofType;
  }
}


module.exports = {SchemaGraph}



// b = new SchemaGraph(a.data.__schema.types)