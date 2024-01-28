CREATE OR REPLACE FUNCTION public.generate_uuid(
	)
    RETURNS uuid
    LANGUAGE 'c'
    COST 1
    VOLATILE STRICT PARALLEL SAFE 
AS '$libdir/uuid-ossp', 'uuid_generate_v1'
;
CREATE TABLE customer(
    id uuid not null default generate_uuid(),
    name character varying,
    req boolean,
    "group" character varying,
    visible boolean default true,
    "order" smallint default 0,
    maxlength smallint default 0,
    type character varying,
    newline boolean,
    hidetitle boolean,
    split boolean,
    mapper character varying,
    clientzone_visible boolean,
    clientzone_editable boolean,
    clientzone_check character varying,
    clientzone_required boolean,
    cl_visible boolean,
    step int default 0,
    auto_approve boolean,
    condition_type int default 0,
    condition text[],
    values jsonb default null,
    regex character varying,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);
CREATE UNIQUE INDEX idx_customer on customer(id);
