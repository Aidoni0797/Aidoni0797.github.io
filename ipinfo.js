function getiDONiInfo() {
      const url = "https://ipinfo.io/json";
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log("IP Address Information:");
          console.log(`IP:`, data.ip);
          console.log(`City:`, data.city);
          console.log(`Region:`, data.region);
          console.log(`Country:`, data.country);
          console.log(`Location:`, data.loc);
          console.log(`ISP:`, data.org);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }

    getiDONiInfo();
