import type { HTMLInputTypeAttribute } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select } from '@/components/ui/select';
import type { MembershipApplication } from '../types';

type TextInputField = Exclude<keyof MembershipApplication, 'gender'>;

export type UpdateMembershipField = <K extends keyof MembershipApplication>(
  key: K,
  value: MembershipApplication[K],
) => void;

type ApplicationSectionProps = {
  form: MembershipApplication;
  update: UpdateMembershipField;
};

function TextInput({
  form,
  update,
  label,
  field,
  type = 'text',
  placeholder,
  required = false,
}: ApplicationSectionProps & {
  label: string;
  field: TextInputField;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="field">
      <Label className="field-label" htmlFor={field}>
        {label}
      </Label>
      <Input
        id={field}
        type={type}
        value={form[field]}
        onChange={(event) => update(field, event.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export function PersonalInformationSection(props: ApplicationSectionProps) {
  const { form, update } = props;

  return (
    <section
      className="form-section"
      aria-labelledby="personal-information-heading"
    >
      <h2 className="section-title" id="personal-information-heading">
        PERSONAL INFORMATION
      </h2>
      <div className="form-grid">
        <TextInput {...props} label="GIVEN NAME" field="givenName" required />
        <TextInput {...props} label="MIDDLE NAME" field="middleName" />
        <TextInput {...props} label="FAMILY NAME" field="familyName" required />
        <TextInput
          {...props}
          label="BIRTH DATE"
          field="birthDate"
          type="date"
          required
        />
        <div className="field">
          <Label className="field-label" htmlFor="country">
            COUNTRY
          </Label>
          <Select
            id="country"
            value={form.country}
            onChange={(event) => update('country', event.target.value)}
            required
          >
            <option value="">Select Country</option>
            {[
              'Vietnam',
              'Philippines',
              'Japan',
              'India',
              'Malaysia',
              'Singapore',
              'United States',
              'United Kingdom',
              'Australia',
            ].map((country) => (
              <option key={country}>{country}</option>
            ))}
          </Select>
        </div>
        <fieldset className="field gender-field">
          <legend className="field-label">GENDER</legend>
          <RadioGroup
            className="radio-row"
            value={form.gender}
            onValueChange={(value) => {
              if (value === 'male' || value === 'female') {
                update('gender', value);
              }
            }}
            aria-label="Gender"
          >
            <Label className="radio-option" htmlFor="gender-male">
              <RadioGroupItem id="gender-male" value="male" />
              MALE
            </Label>
            <Label className="radio-option" htmlFor="gender-female">
              <RadioGroupItem id="gender-female" value="female" />
              FEMALE
            </Label>
          </RadioGroup>
        </fieldset>
        <div className="field">
          <Label className="field-label" htmlFor="height">
            HEIGHT
          </Label>
          <Select
            id="height"
            value={form.height}
            onChange={(event) => update('height', event.target.value)}
          >
            <option value="">Select Height</option>
            {Array.from({ length: 81 }, (_, index) => index + 140).map(
              (height) => (
                <option key={height} value={height}>
                  {height} cm
                </option>
              ),
            )}
          </Select>
        </div>
        <div className="field">
          <Label className="field-label" htmlFor="weight">
            WEIGHT
          </Label>
          <Select
            id="weight"
            value={form.weight}
            onChange={(event) => update('weight', event.target.value)}
          >
            <option value="">Select Weight</option>
            {Array.from({ length: 121 }, (_, index) => index + 30).map(
              (weight) => (
                <option key={weight} value={weight}>
                  {weight} kg
                </option>
              ),
            )}
          </Select>
        </div>
      </div>
    </section>
  );
}

export function CommunicationSection(props: ApplicationSectionProps) {
  return (
    <section className="form-section" aria-labelledby="communication-heading">
      <h2 className="section-title" id="communication-heading">
        MEANS OF COMMUNICATION
      </h2>
      <div className="form-grid two">
        <TextInput
          {...props}
          label="EMAIL"
          field="email"
          type="email"
          required
        />
        <TextInput
          {...props}
          label="MOBILE NUMBER"
          field="mobile"
          type="tel"
          required
        />
        <TextInput
          {...props}
          label="FACEBOOK PROFILE URL"
          field="facebook"
          type="url"
        />
        <div className="field field-bottom-aligned">
          <Button variant="outline" asChild>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OPEN FB
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function KarateExperienceSection(props: ApplicationSectionProps) {
  const { form, update } = props;

  return (
    <section
      className="form-section"
      aria-labelledby="karate-experience-heading"
    >
      <h2 className="section-title" id="karate-experience-heading">
        KARATE EXPERIENCE
      </h2>
      <div className="form-grid">
        <div className="field">
          <Label className="field-label" htmlFor="style">
            CURRENT STYLE
          </Label>
          <Select
            id="style"
            value={form.style}
            onChange={(event) => update('style', event.target.value)}
            required
          >
            <option value="">Select Style</option>
            {['Kyokushinryu', 'Kyokushin', 'Other'].map((style) => (
              <option key={style}>{style}</option>
            ))}
          </Select>
        </div>
        <TextInput
          {...props}
          label="CURRENT ORGANIZATION"
          field="organization"
          placeholder="Organization"
        />
        <TextInput
          {...props}
          label="CURRENT PRESIDENT/KANCHO"
          field="president"
          placeholder="President / Kancho"
        />
        <div className="field">
          <Label className="field-label" htmlFor="rank">
            CURRENT RANK
          </Label>
          <Select
            id="rank"
            value={form.rank}
            onChange={(event) => update('rank', event.target.value)}
            required
          >
            <option value="">Select Rank</option>
            {[
              '10th Kyu',
              '9th Kyu',
              '8th Kyu',
              '7th Kyu',
              '6th Kyu',
              '5th Kyu',
              '4th Kyu',
              '3rd Kyu',
              '2nd Kyu',
              '1st Kyu',
              '1st Dan',
              '2nd Dan',
              '3rd Dan',
            ].map((rank) => (
              <option key={rank}>{rank}</option>
            ))}
          </Select>
        </div>
        <TextInput
          {...props}
          label="MEMBERSHIP ID NUMBER"
          field="membershipId"
        />
      </div>
    </section>
  );
}

export function PrivacyPolicy({
  agreed,
  onChange,
}: {
  agreed: boolean;
  onChange: (agreed: boolean) => void;
}) {
  return (
    <section
      className="form-section privacy-section"
      aria-labelledby="privacy-heading"
    >
      <h2 className="section-title" id="privacy-heading">
        PRIVACY POLICY
      </h2>
      <div className="privacy-box" tabIndex={0}>
        <p>
          At International Karate Alliance Kyokushinryu, we are aware of the
          trust you place in us and so it is our responsibility to protect your
          privacy. Below is a summary of the information our site gathers, how
          it is used, and how you can opt out.
        </p>
        <p>Please contact us if you have questions about our privacy policy.</p>
        <p>
          <strong>What personal data we collect and why we collect it</strong>
          <br />
          When you submit a membership application, we may collect the following
          personal information:
        </p>
        <p>
          Name
          <br />
          Email Address
          <br />
          Date of Birth
          <br />
          Country
          <br />
          Contact Information
          <br />
          Karate Experience
          <br />
          Profile Photograph
        </p>
        <p>
          This information is used to process membership applications, maintain
          membership records and communicate with applicants. Personal
          information is handled according to applicable privacy and data
          protection requirements.
        </p>
      </div>
      <div className="privacy-agree">
        <Checkbox
          id="privacy-agreement"
          checked={agreed}
          onCheckedChange={(checked) => onChange(checked === true)}
        />
        <Label className="privacy-agree-label" htmlFor="privacy-agreement">
          By ticking this box, you are agreeing to the privacy policies imposed
          by <strong>International Karate Alliance Kyokushinryu</strong>.
        </Label>
      </div>
    </section>
  );
}
