package com.vitalativa.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;

@Configuration
public class OpenApiConfig {
    
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Vital Ativa Academia API")
                        .version("1.0.0")
                        .description("API REST para gerenciamento de academia")
                        .contact(new Contact()
                                .name("Vital Ativa")
                                .email("contato@vitalativa.com")))
                .servers(List.of(
                        new Server().url("https://vital-ativa-academia.onrender.com").description("Servidor de Produção"),
                        new Server().url("http://localhost:10000").description("Servidor Local")));
    }
}