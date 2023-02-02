import React from "react";
import { Form, Field } from "react-final-form";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: object | number) => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};

const NewSpellForm = () => {
  return (
    <div>
      <h1>React Final Form - Simple</h1>
      <Form
        onSubmit={onSubmit}
        validate={(values: any) => {
          const errors = { name: "", description: "" };

          if (!values.name) {
            errors.name = "Required";
          }
          if (values.description.length < 10) {
            errors.description = "Required";
          }
          return errors;
        }}
        initialValues={{ type: "mage", description: "" }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>New Spell name</label>
              <Field name="name">
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
              <label>New Spell Type</label>
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
              <label>Description</label>
              <Field name="description">
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
