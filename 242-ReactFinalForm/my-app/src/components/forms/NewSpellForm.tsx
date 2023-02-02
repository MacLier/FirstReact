import React from "react";
import { Form, Field } from "react-final-form";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: object | number) => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};

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
      <h1>React Final Form - Simple</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={{ type: "mage", description: "" }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>New Spell Name</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="New Spell Name"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="type" component="select">
                <option value="mage">Mage</option>
                <option value="bard">Bard</option>
                <option value="priest">Priest</option>
                <option value="monk">Monk</option>
                <option value="witchMaster">Witch master</option>
                <option value="witch">Witch</option>
                <option value="fireMage">Fire mage</option>
                <option value="shaman">Shaman</option>
              </Field>
            </div>
            <div>
              <Field name="description" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Description</label>
                    <input {...input} type="text" placeholder="description" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="requirement"
                validate={compositeValidators(
                  required,
                  mustBeNumber,
                  minValue(1)
                )}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Mana requirement</label>
                    <input
                      {...input}
                      type="number"
                      placeholder="Mana requirement"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
