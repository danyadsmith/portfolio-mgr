

## Schema Design

    {
      "SKILLS": {
        "name": "the name of the skill",
        "category_id": "foreign key/id of the skill category"
        "expertise": "skill level"
      },

      "CATEGORY": {
        "name:" "the name of the category"
      },

      "EDUCATION": {
        "school": "the name of the school you attended",
        "degree_or_program": "the name of the degree or program completed",
        "major": "major concentration for collegiate studies only",
        "minor": "minor concentration for collegiate studies only",
        "date_completed": "calendar year or month/year format"
      },

      "WORK_HISTORY": {
        "employer": "the name of the company or employer",
        "city": "the city where you worked",
        "state": "the state where you worked",
        "job_title": "your job title",
        "start_date": "your start date",
        "end_date": "your end date",
        "logo_image": "company logo image"
      },

      "PROJECTS": {
        "project_type": "work experience, open source, student project, community service",
        "title": "the title of the project or application",
        "role": "your role on the project team",
        "url": "a link to the project website or repository (optional)",
        "highlights": "an array of one-liners that describe something cool you did on this project"
      },

      "COMMUNITY_SERVICE": {
        "organization": "name of the organization",
        "role": "your volunteer role or activity"
      },

      "SOCIAL_MEDIA": {
        "site_name": "the name of the site",
        "username": "your username on the site",
        "profile_url": "a link to your profile"
      },

      "PORTFOLIO": {
        "project_id": "foreign key/id of the related project",
        "primary_image": "url for the primary image used for this portfolio item",
        "blog_id": "foreign key/id of a related blog post"
      },

      "BLOG": {
        "title": "blog post title",
        "body": "blog post content stored in Multimarkdown format",
        "published": "boolean"
        "date_published": "the date the blog post was published"
        "medium_url": "link to the post on medium - redirect for comments"
      },

      "SKILL_CATEGORIES": {
        "skill_id": "id",
        "category_id": "id"
      },

      "BLOG_CATEGORIES": {
        "blog_id": "id",
        "category_id": "id"
      },

      "OWNER": {
        "first_name": "the first name of the site owner",
        "middle_name": "the middle name or middle initial of the site owner",
        "last_name": "the last name of the site owner",
        "address_1": "mailing address line one",
        "address_2": "mailing address line two",
        "city": "city where the site owner lives",
        "state_province": "state or province where the site owner lives",
        "country": "country where the site owner lives",
        "postal_code": "the zip code or postal code where the site owner lives",
        "location": "a one line description of the owner’s location"
        "phone": "the telephone number where the site owner can be reached",
        "email": "the email address of the site owner"
      }

      "SETTINGS": {
        "hide_email": "boolean",
        "hide_phone": "boolean",
        "hide_address": "boolean",
        "hide_location": "boolean",
        "enable_contact_form": "boolean"
      }
    }


## REST API Design

    {
      "VERB /route": {
        "description": "returns all lions",
        "success_response": "200 application/json",
        "error_response": "200 application/json",
        "data": ""
      }
    }
