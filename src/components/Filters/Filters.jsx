import { Form, Formik } from "formik";
import sprite from "../../assets/images/sprite.svg";
import {
  Button,
  Group,
  GroupTitle,
  Input,
  Label,
  Span,
  SvgIcon,
  SvgIconCampers,
  SectionFilters,
} from "./Filters.styled";
import { useDispatch } from "react-redux";
import {
  updateEquipmentFilter,
  updateVehicleTypeFilter,
} from "../../redux/cars/filtersSlice";
import { Title } from "../CurrentLocation/CurrentLocation.styled";

const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateEquipmentFilter(values.equipment));
    dispatch(updateVehicleTypeFilter(values.type));
  };

  return (
    <SectionFilters>
      <Title>Filters</Title>
      <Formik
        initialValues={{
          equipment: [],
          type: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <GroupTitle id="checkbox-group-equipment">
            Vehicle equipment
          </GroupTitle>
          <Group role="group" aria-labelledby="checkbox-group-equipment">
            <Label>
              <Input type="checkbox" name="equipment" value="airConditioner" />
              <Span>
                <SvgIcon style={{ fill: "#101828" }}>
                  <use href={sprite + "#icon-ac"} />
                </SvgIcon>
                AC
              </Span>
            </Label>
            <Label>
              <Input type="checkbox" name="equipment" value="automatic" />
              <Span>
                <SvgIcon style={{ stroke: "#101828" }}>
                  <use href={sprite + "#icon-automatic"} />
                </SvgIcon>
                Automatic
              </Span>
            </Label>

            <Label>
              <Input type="checkbox" name="equipment" value="kitchen" />
              <Span>
                <SvgIcon style={{ stroke: "#101828" }}>
                  <use href={sprite + "#icon-kitchen"} />
                </SvgIcon>
                Kitchen
              </Span>
            </Label>
            <Label>
              <Input type="checkbox" name="equipment" value="TV" />
              <Span>
                <SvgIcon style={{ stroke: "#101828" }}>
                  <use href={sprite + "#icon-tv"} />
                </SvgIcon>
                TV
              </Span>
            </Label>
            <Label>
              <Input type="checkbox" name="equipment" value="shower" />
              <Span>
                <SvgIcon style={{ stroke: "#101828" }}>
                  <use href={sprite + "#icon-shower"} />
                </SvgIcon>
                Shower/WC
              </Span>
            </Label>
          </Group>

          <GroupTitle id="checkbox-group-type" style={{ marginTop: "30px" }}>
            Vehicle type
          </GroupTitle>
          <Group role="group" aria-labelledby="checkbox-group-type">
            <Label>
              <Input type="radio" name="type" value="panelTruck" />
              <Span>
                <SvgIconCampers style={{ width: "40px", height: "28px" }}>
                  <use href={sprite + "#icon-van"} />
                </SvgIconCampers>
                Van
              </Span>
            </Label>
            <Label>
              <Input type="radio" name="type" value="fullyIntegrated" />
              <Span>
                <SvgIconCampers style={{ width: "40px", height: "28px" }}>
                  <use href={sprite + "#icon-fully-integrated"} />
                </SvgIconCampers>
                Fully Integrated
              </Span>
            </Label>

            <Label>
              <Input type="radio" name="type" value="alcove" />
              <Span>
                <SvgIconCampers style={{ width: "40px", height: "28px" }}>
                  <use href={sprite + "#icon-alcove"} />
                </SvgIconCampers>
                Alcove
              </Span>
            </Label>
          </Group>

          <Button type="submit">Search</Button>
        </Form>
      </Formik>
    </SectionFilters>
  );
};

export default Filters;