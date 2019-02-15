UPDATE product
SET name = $2, price = $3, img_url = $4
WHERE product_id = $1;

SELECT *
FROM product