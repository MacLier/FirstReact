import React from "react";
import { Form, Field } from "react-final-form";

type FormValues = {
  name?: string;
  type?: string;
  description?: string;
  requirement?: number;
};
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: object | number) => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};

const Error = ({ name }: { name: string }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
);
const Condition = ({
  when,
  is,
  children,
}: {
  when: string;
  is: string;
  children: React.ReactNode;
}) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

const required = (value: string) => (value ? undefined : "Required");
const mustBeNumber = (value: any) =>
  isNaN(value) ? "Must be a number." : undefined;
const minValue = (min: number) => (value: any) =>
  isNaN(value) || value > min ? undefined : `Should be greater than ${min}`;
const compositeValidators =
  (...validators: any[]) =>
  (value: any) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const NewSpellForm = () => {
  return (
    <div>
      <h1>React Final Form - Example</h1>
      <h2>Synchronous Record-Level Validation (with debounced errors)</h2>
      <Form<FormValues>
        onSubmit={onSubmit}
        initialValues={{ type: "mage", description: "" }}
        validate={(values) => {
          const errors: Partial<Record<keyof FormValues, string>> = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (!values.requirement) {
            errors.requirement = "require";
          } else if (isNaN(values.requirement)) {
            errors.requirement = "Must be a number.";
          } else if (values.requirement < 1) {
            errors.requirement = "Must be > 1";
          }
          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="name">
                {({ input, meta }) => (
                  <div>
                    <label>New Spell Name</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="New Spell Name"
                    />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label>Type</label>
              <div>
                <label>
                  <Field
                    name="type"
                    component="input"
                    type="radio"
                    value="mage"
                  />{" "}
                  Mage
                </label>
                {/* <option value="mage">Mage</option>
                <option value="bard">Bard</option>
                <option value="priest">Priest</option>
                <option value="monk">Monk</option>
                <option value="witchMaster">Witch master</option>
                <option value="witch">Witch</option>
                <option value="fireMage">Fire mage</option>
                <option value="shaman">Shaman</option> */}

                <label>
                  <Field
                    name="type"
                    component="input"
                    type="radio"
                    value="priest"
                  />{" "}
                  Priest
                </label>
              </div>
              <Error name="type" />
            </div>
            <Condition when="type" is="priest">
              <div>
                <label>Sphere</label>
                <Field name="sphere" component="select">
                  <option value="life">Life</option>
                  <option value="spirit">Spirit</option>
                  <option value="nature">Nature</option>
                  <option value="death">Death</option>
                </Field>
                <Error name="type"></Error>
              </div>
            </Condition>
            <Condition when="type" is="mage">
              <div>
                <label>There is no sphere</label>
                <Field
                  name="sphere"
                  component="input"
                  value=""
                  disabled
                ></Field>
              </div>
            </Condition>
            <div>
              <Field name="description">
                {({ input, meta }) => (
                  <div>
                    <label>Description</label>
                    <input {...input} type="text" placeholder="description" />
                    {/* {meta.error && meta.touched && <span>{meta.error}</span>} */}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="requirement">
                {({ input, meta }) => (
                  <div>
                    <label>Mana requirement</label>
                    <input
                      {...input}
                      type="number"
                      placeholder="Mana requirement"
                    />
                    {/* {meta.error && meta.touched && <span>{meta.error}</span>} */}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values)}</pre>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default NewSpellForm;

// class NewSpellForm extends React.Component {
//   constructor() {
//     super();
//     const initialState = {};
//     let inConstructor = true;
//     this.form = createForm({ onSubmit });
//     this.unsubscribe = this.form.subscribe(
//       (formState) => {
//         if (inConstructor) {
//           initialState.formState = formState;
//         } else {
//           this.setState({ formState });
//         }
//       },
//       { active: true, pristine: true, submitting: true, values: true }
//     );
//     this.unsubscribeFields = ["name", "type"].map((fieldName) =>
//       this.form.registerField(
//         fieldName,
//         (fieldState) => {
//           if (inConstructor) {
//             initialState[fieldName] = fieldState;
//           } else {
//             this.setState({ [fieldName]: fieldState });
//           }
//         },
//         { value: true }
//       )
//     );
//     this.state = initialState;
//     inConstructor = false;
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//     this.unsubscribeFields.forEach((unsubscribe) => unsubscribe());
//   }
//   handleSbumit = (event) => {
//     event.preventDefault();
//     this.form.submit();
//   };
//   render() {
//     const { formState, name, type } = this.state;
//     return (
//       <div>
//         <h1>Final Form - Simple React Example</h1>
//         <form onSubmit={this.handleSbumit}>
//           <div>
//             <label>Name</label>
//             <input
//               name="name"
//               onBlur={() => name.blur()}
//               onChange={(event) => name.change(event.target.value || undefined)}
//               onFocus={() => name.focus()}
//               value={name.value || ""}
//               placeholder="Spell name"
//             />
//           </div>
//           <div>
//             <label>Type</label>
//             <input
//               name="type"
//               onBlur={() => type.blur()}
//               onChange={(event) => type.change(event.target.value || undefined)}
//               onFocus={() => type.focus()}
//               value={type.value || ""}
//               placeholder="Spell type"
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
