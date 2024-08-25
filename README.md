### This repository demonstrates
1. The creation of container images using `docker build` command.
2. Running of container instances from container images using `docker run` command.
3. Multi-stage build techniques with distroless images

### To build the container images
```
for app in node python; do docker build -t sctp-ce6-mod3.4:"$app" "$app"; done
```

### To run the container
```
cat <<'EOF' | tee run.sh
#!/usr/bin/env bash
declare -A arr
arr=( ["node"]="8081" ["python"]="8082" )
export APP_PORT=9090
for app in ${!arr[@]}; do
    docker run -e APP_PORT -d -p ${arr[${app}]}:"$APP_PORT" sctp-ce6-mod3.4:${app}
done
EOF
bash run.sh
rm run.sh
```

### To test the container
```
cat <<'EOF' | tee test.sh
#!/usr/bin/env bash
declare -A arr
arr=( ["node"]="8081" ["python"]="8082" )
for app in ${!arr[@]}; do
    port=${arr[${app}]}
    printf "Response from port %s\n" "$port"; curl -s localhost:"$port" | jq . ; echo
done
EOF
bash test.sh
rm test.sh
```

### To stop and remove the running containers
```
docker rm $(docker ps | grep "sctp-ce6-mod3.4" | awk '{print $1}') --force
```

### TO delete container images
```
docker rmi $(docker images | grep "sctp-ce6-mod3.4" | awk '{print $3}')
```