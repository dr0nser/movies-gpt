### Fetching data using `axios`

```javascript
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.example.com/data", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer your-token",
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default MyComponent;
```

### Fetching data using `react-query`

```javascript
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

// Define your fetching function
const fetchData = async () => {
  const res = await axios.get("https://api.example.com/data", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer your-token",
    },
  });
  return res.data;
};

const MyComponent: React.FC = () => {
  // Use the useQuery hook to fetch data
  const { data, status } = useQuery("myData", fetchData);

  // Render the appropriate UI based on the query status
  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "error") {
    return <div>Error fetching data</div>;
  } else {
    return (
      <div>
        {data && data.map((item: any) => <div key={item.id}>{item.name}</div>)}
      </div>
    );
  }
};

export default MyComponent;
```
