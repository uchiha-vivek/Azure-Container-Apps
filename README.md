





### Open Container Registry in Azure  (Azure Container Registry)


1. Create container Registry from Azure

2. Build the docker image

```bash
docker build -t  testdemov1-dyg8a5cvfkhjgjee.azurecr.io/express-demo-app:v1 .
```

3. Run the docker login command


For login you will get the credentials from `Settings > Access Keys`, Enable Admin user and then you will get `username` and `password`

<p align="center">
  <a href="">
    <img src="./assets/tut1.png" width="650" height="700"  alt="ally" style="margin: 0 15px;" />
  </a>
</p>



```bash
docker login testdemov1-dyg8a5cvfkhjgjee.azurecr.io
```

4. Push the docker image

```bash
 docker push testdemov1-dyg8a5cvfkhjgjee.azurecr.io/express-demo-app:v1  
 ```


## Container Apps


1. Create new container app

<p align="center">
  <a href="">
    <img src="./assets/container-apps.png" width="650" height="700"  alt="ally" style="margin: 0 15px;" />
  </a>
</p>



<p align="center">
  <a href="">
    <img src="./assets/container-apps-v1.png" width="650" height="700"  alt="ally" style="margin: 0 15px;" />
  </a>
</p>



- Try to select resource group same as the one where you created container registry



2. Enable the ingress

<p align="center">
  <a href="">
    <img src="./assets/ingress.png" width="650" height="700"  alt="ally" style="margin: 0 15px;" />
  </a>
</p>

 - Enable accepting traffic from anywhere
 - Ingress type should be `http`
 - Select Target PORT to `3000`


 3. After you create the Container App , you will get Application url. This link will be the deployed server

 4. From Revision and Replicas you can clearly see the logs 

 This needs to be configured according to the application usecase

 <p align="center">
  <a href="">
    <img src="./assets/revision.png" width="650" height="700"  alt="ally" style="margin: 0 15px;" />
  </a>
</p>