import ProductPreview from "components/productPreview/productPreview";
import styled from "styled-components";

const ProductPreviewGroup = () => {
  return (
    <ProductPreviewGroupStyles>
      <span>
        <ProductPreview
          text="XX99 Mark II"
          image=""
          slug={"xx99-mark-two-headphones"}
        />
      </span>
      <span>
        <ProductPreview text="XX59" image="" slug={"xx59-headphones"} />
      </span>
      <span>
        <ProductPreview text="ZX9 Speaker" image="" slug={"zx9-speaker"} />
      </span>
    </ProductPreviewGroupStyles>
  );
};

export default ProductPreviewGroup;

const ProductPreviewGroupStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
