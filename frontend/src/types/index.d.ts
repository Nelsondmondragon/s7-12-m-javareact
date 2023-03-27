declare module '*.jpg';
declare module '*.png';

type LoginProps = {
  email: string;
  password: string;
};
type RegisterProps = {
  email: string;
  password: string;
};

type User = {
  name: string;
  email: string;
  avatar: string;
};

type CurrentJobPost = {
  company_avatar?: string;
  company_name: string;
  company_desc: string;
  company_url_linkedin: string;
  company_url_web: string;
  company_phone: string;
  job_offered: string;
  job_desc: string;
  job_requirements: JobRequirements[];
  job_country: string;
  job_region: string;
  job_work_place: string;
  job_working_day: string;
};
