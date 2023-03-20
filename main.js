    let i = 1;
    let x = 1;
    let y = 1;
    function append_input_phone() {
      const node = document.createElement("input");
      const textnode = document.createTextNode("phone");
      node.appendChild(textnode);
      node.placeholder = "Phone" + i;
      node.type = "tel";
      node.id = "phone";
      document.getElementById("div_id_phone").appendChild(node);
      i++;
    }
    function append_input_email() {
      const node = document.createElement("input");
      const textnode = document.createTextNode("Email");
      node.appendChild(textnode);
      node.placeholder = "Email" + x;
      node.type = "email";
      node.id = "email";
      document.getElementById("div_id_email").appendChild(node);
      x++;
    }
    function append_input_tickets() {
      const node = document.createElement("input");
      const textnode = document.createTextNode("Tickets");
      node.appendChild(textnode);
      node.placeholder = "Tickets" + y;
      node.type = "text";
      node.id = "tickets";
      document.getElementById("div_id_tickets").appendChild(node);
      y++;
    }