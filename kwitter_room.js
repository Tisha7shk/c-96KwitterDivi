
//ADD YOUR FIREBASE LINKS
//var firebaseConfig = 
//{ 
//apiKey: "AIzaSyBcXugCtd6Af0ElfEKkRwrp89KCh6sg8wA", 
//authDomain: "kwittr-1b192.firebaseapp.com", 
//projectId: "kwittr-1b192", 
//storageBucket: "kwittr-1b192.appspot.com", 
//messagingSenderId: "427545167776", 
//appId: "1:427545167776:web:f6a86207da51e6e86a06c5", 
//measurementId: "G-P56LGRMDGZ" 
//}; 
// Initialize Firebase 
var firebaseConfig = {
      apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw",
      authDomain: "jsdbtest.firebaseapp.com",
      databaseURL: "https://jsdbtest.firebaseio.com",
      projectId: "jsdbtest",
      storageBucket: "jsdbtest.appspot.com",
      messagingSenderId: "557097620929",
      appId: "1:557097620929:web:d549209de61a48b20b8b40"
    };
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitte_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitte_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
    }
    