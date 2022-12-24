import Image from "next/image";
import styled from "styled-components";
import { h5 } from "utils/typography";
import Button from "components/buttons";
import { useRouter } from "next/router";

interface ProductPreviewProps {
  text: string;
  image: any;
  slug: string;
}

const ProductPreview = ({ text, image, slug }: ProductPreviewProps) => {
  const router = useRouter();

  return (
    <ProductPreviewStyles>
      <div className="product">
        <span className="product__img">
          <Image alt={text} src={image} />
        </span>
        <span className="product__description">
          <h1>{text.toUpperCase()}</h1>

          <Button
            onClick={() => router.push(`/product/${slug}`)}
            text="see product"
            variant="PINK_DARK"
          />
        </span>
      </div>
    </ProductPreviewStyles>
  );
};

export default ProductPreview;

const ProductPreviewStyles = styled.div`
  .product {
    width: 35rem;
    height: 47rem;
    &__img {
      border-radius: 0.8rem;
    }

    &__description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      h1 {
        ${h5}
        margin: 3rem 0;
      }
    }
  }
`;
