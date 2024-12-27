# pedidos

# 27-12

# generar base de la pagina

.sidebar {
position: fixed;
left: -250px;
top: 0;
width: 250px;
height: 100%;
background-color: #333;
color: white;
padding: 20px;
transition: left 0.3s ease;
}

.sidebar.active {
left: 0;
}

.menu-toggle {
background-color: #333;
color: white;
border: none;
padding: 10px;
cursor: pointer;
}

<button class="menu-toggle">☰</button>

<aside class="sidebar">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </aside>
