
```bash
mvn flyway:baseline
mvn flyway:migrate
mvn -Dmybatis.generator.overwrite=true mybatis-generator:generate
/root/documents/App/community/target/community-0.0.1-SNAPSHOT.jar
java -jar -Dspring.profiles.active=production target/community-0.0.1-SNAPSHOT.jar
```