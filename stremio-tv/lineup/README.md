# Stremio TV — canalera organizada · 2026-10-09

URL para Browse repo: https://github.com/Jorgeprdz/stremio-for-you-pages/tree/main/stremio-tv/lineup

El navegador Browse repo importa los archivos JSON de esta carpeta ordenados por nombre. Importa todos partiendo de una biblioteca local sin duplicados si quieres Sony como primer canal **local**. Otros addons pueden ocupar números previos.

SERIES 01–14; MOVIES 15–20; Golden Channel recuperado íntegro del PR #5 del repositorio Jorgeprdz/debrify como canal 16, 284 películas sin cambios en título, imagen o selección.

Se preservan intactos los 8 catálogos individuales. Las películas de Blockbuster tienen imágenes por IMDb; los conciertos también.

AVISO: la propiedad top-level poster no se conserva en LocalCatalogImporter; las portadas visibles en Stremio TV provienen de cada item.poster, y la URL de Metahub debe responder en el dispositivo.

Se corrigió el Sony TV eliminando Frasier y Will & Grace (NewsRadio no figuraba en el JSON original) y agregando 3rd Rock from the Sun.

Golden Channel: recuperado desde https://github.com/Jorgeprdz/debrify/pull/5, conservando la portada SVG existente, 284 películas e IDs originales. El cliente oficial sin el PR puede ignorar la portada independiente cover. La rotación de películas sí funciona como catálogo local.

1. 01-sony-tv.json (series; undefined títulos)
2. 02-warner-animation.json (series; undefined títulos)
3. 03-fox-animation.json (series; undefined títulos)
4. 04-discovery-channel.json (series; undefined títulos)
5. 05-tv-noventera-mexico.json (series; undefined títulos)
6. 06-friends-tv.json (series; undefined títulos)
7. 07-himym-tv.json (series; undefined títulos)
8. 08-the-simpsons-tv.json (series; undefined títulos)
9. 09-third-rock-tv.json (series; undefined títulos)
10. 10-two-and-a-half-men-tv.json (series; undefined títulos)
11. 11-that-70s-show-tv.json (series; undefined títulos)
12. 12-caballeros-del-zodiaco-latino-tv.json (series; undefined títulos)
13. 13-x-files-mythology-tv.json (series; undefined títulos)
14. 14-concerts-tv.json (movie; undefined títulos)
15. 15-blockbuster-classics-tv.json (movie; undefined títulos)
16. 17-war-movies.json (movie; undefined títulos)
17. 18-crime-movies.json (movie; undefined títulos)
18. 19-thriller-movies.json (movie; undefined títulos)
19. 20-sports-movies.json (movie; undefined títulos)
