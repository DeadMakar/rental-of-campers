import {
  TabsWrap,
  TabsList,
  RenderBlock,
  BookFormContainer,
} from "./Tabs.styled";
import { Features } from "../Features";
import { BookForm } from "../BookForm";
import { Reviews } from "../Reviews";

const Tabs = ({ card, activeTab, setActiveTab }) => {
  return (
    <TabsWrap>
      <TabsList>
        <li>
          <button
            type="button"
            aria-label="Show features"
            className={activeTab === "features" ? "active" : ""}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-label="Show reviews"
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </li>
      </TabsList>

      <hr />

      <RenderBlock>
        {activeTab === "features" ? (
          <>
            <Features card={card} />
            <BookFormContainer>
              <BookForm />
            </BookFormContainer>
          </>
        ) : (
          <>
            <Reviews card={card} />
            <BookFormContainer>
              <BookForm />
            </BookFormContainer>
          </>
        )}
      </RenderBlock>
    </TabsWrap>
  );
};

export default Tabs;
