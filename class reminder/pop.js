
    function showNotification(title, message) {
      var options = {
        body: message,
        icon : 'appointment.png',
      }
      var n = new Notification(title, options);

    }

    function mainactivity() {
      var myDate = new Date();
      var hours = myDate.getHours();
      var minutes = myDate.getMinutes();
      var timetrigger = (hours + ":" + minutes);
      console.log(timetrigger);
      switch (timetrigger) {
        case '8:59': {
          switch (myDate.getDay()) {
            case 1: showNotification('C.O.A Class', 'Faculty: Franklin Vinod (FRV)'); break;
            case 2: showNotification('Data Str & Algo Class', 'Faculty: Nishant Anand (NSA)'); break;
            case 3: showNotification('Transform & Boundary Problems Class', 'Faculty: Priyanka Aggarwal (PRA)'); break;
            case 4: showNotification('Data Str & Algo Class', 'Faculty: Nishant Anand (NSA)'); break;
            case 5: showNotification('Analog & Digital Class', 'Faculty: Arun Kumar (ARK)'); break;
            case 6: showNotification('OOPS Class', 'Faculty: Abhishek Sharma (ABS)'); break;
            case 0: showNotification('SUNDAY', 'Enjoy The Day cuz Its Sunday!')
          }
        } break;

        case '10:44': {
          switch (myDate.getDay()) {
            case 1: showNotification('OOPS Class', 'Faculty: Abhishek Sharma (ABS)'); break;
            case 2: showNotification('Analog & Digital Class', 'Faculty: Arun Kumar (ARK)'); break;
            case 3: showNotification('Biology Class', 'Faculty: Parool Jain (PJ)'); break;
            case 4: showNotification('OOPS Class', 'Faculty: Abhishek Sharma (ABS)'); break;
            case 5: showNotification('Transform & Boundary Problems Class', 'Faculty: Priyanka Aggarwal (PRA)'); break;
            case 6: showNotification('NO Class', 'Netflix/Prime/Disney+/Youtube & Chill'); break;
          }
        } break;
        case '11:59': {
          switch (myDate.getDay()) {
            case 1: showNotification('NO Class', 'Netflix/Prime/Disney+/Youtube & Chill'); break;
            case 2: showNotification('Competencies In Social Skills', 'Faculty: Sateesh Kumar (SKS)'); break;
            case 3: showNotification('Analog & Digital Class', 'Faculty: Arun Kumar (ARK)'); break;
            case 4: showNotification('Transform & Boundary Problems Class', 'Faculty: Priyanka Aggarwal (PRA)'); break;
            case 5: showNotification('Management principal For Engg. Class', 'Faculty: Jai Prakash Chubey (JPC)'); break;
            case 6: showNotification('C.O.A Class', 'Faculty: Franklin Vinod (FRV)'); break;
          }
        } break;
        case '13:59': {
          switch (myDate.getDay()) {
            case 1: showNotification('Data Str & Algo Class', 'Faculty: Nishant Anand (NSA)'); break;
            case 2: showNotification('C.O.A LAB Class ', 'Faculty: Franklin Vinod (FRV)'); break;
            case 3: showNotification('Analog LAB / C.O.A LAB Class ', 'Faculty: Arun Kumar (ARK) / Franklin Vinod (FRV)'); break;
            case 4: showNotification('Analog LAB / C.O.A LAB Class ', 'Faculty: Arun Kumar (ARK) / Franklin Vinod (FRV)'); break;
            case 5: showNotification('DSA LAB / OOPS LAB Class ', 'Faculty: Nishant Anand (NSA) / Abhishek Sharma (ABS)'); break;
            case 6: showNotification('DSA LAB / OOPS LAB Class ', 'Faculty: Nishant Anand (NSA) / Abhishek Sharma (ABS)'); break;
          }
        } break;
      
      }
    }
    
    console.log(Notification.permission);
    maincall();
    
    function maincall() {
      if (Notification.permission === "granted") {
        mainactivity();
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          console.log(permission);
        })
      }
      var t = setTimeout(maincall, 60000);
    }