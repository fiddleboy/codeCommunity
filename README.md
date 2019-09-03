
```bash
mvn flyway:baseline
mvn flyway:migrate
mvn -Dmybatis.generator.overwrite=true mybatis-generator:generate
```