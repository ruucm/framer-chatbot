sh makeProd.sh && sh sync.sh && aws cloudfront create-invalidation --distribution-id EUBTXL6TZYGRD --paths "/*"